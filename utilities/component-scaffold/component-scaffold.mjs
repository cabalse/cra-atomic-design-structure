import * as fs from 'fs';
import process from 'process';
import t from 'terminal-kit';

// Settings
const SETTINGS = {
  BASE_URL: './src/components/',
  TEMPLATE_SRC: './utilities/component-scaffold/template/',
  TYPE_FOLDERS: {
    Atom: '00-atoms/',
    Molecule: '01-molecules/',
    Organism: '02-organisms/',
    Template: '03-templates/',
    Page: '04-pages/'
  },
  TEMPLATE_NAME: 'TemplateComponent',
  COMPONENT_TYPES: [
    'Atom', 'Molecule', 'Organism', 'Template', 'Page'
  ]
};

// A Terrible set of Global variables
let componentName = '';
let componentType = '';

// Declare a terminal object and clear the terminal
const term = t.terminal();
term.clear();

// Function for user to input Component name
const inputComponentName = ( callback ) => {
  term( 'Enter Component name (PascalCase): ' );
  term.inputField(
    function ( error, input ) {
      term( '\n' );
      componentName = input;
      callback();
    }
  );
}

// Function for user to select Component type from a single line menu
const inputComponentType = ( callback ) => {
  var options = {
    selectedStyle: term.dim.blue.bgGreen
  };

  term( 'Component type: ' );
  term.singleLineMenu( SETTINGS.COMPONENT_TYPES, options, function ( error, response ) {
    term( '\n' );
    componentType = response.selectedText;
    callback();
  } );
};

// Function to provide feedback to the user on the input
const feedbackInput = ( callback ) => {
  term.green( 'Creating a ', componentType, ' template component: ', componentName, '\n' );
  callback();
};

// Function to facilitate the creation of the component
const creatingComponent = async () => {
  const source = SETTINGS.TEMPLATE_SRC;
  const files = getAllFilesInFolder( source );
  var countDown = files.length;

  const componentNameInLowerCase = componentName.toLowerCase();
  const componentTypeFolder =  `${SETTINGS.BASE_URL}${SETTINGS.TYPE_FOLDERS[ componentType ]}`;
  const newComponentFolder = `${componentTypeFolder}${componentNameInLowerCase}/`;

  var progressBar = term.progressBar( {
    width: 80,
    title: 'Daily tasks:',
    eta: true,
    percent: true,
    items: countDown
  } );
  
  function copyFile ( file ) {
    const destFileName = replaceString( file, SETTINGS.TEMPLATE_NAME.toLowerCase(), componentNameInLowerCase );
    const destination = `${newComponentFolder}${destFileName}`;

    createFolderIfNotExists( componentTypeFolder );
    createFolderIfNotExists( newComponentFolder );
    
    return new Promise( ( resolve ) => {
      fs.copyFile( source + file, destination, () => { resolve() } );
    } );
  }

  function modifyFile ( file ) {
    const fileName = replaceString( file, SETTINGS.TEMPLATE_NAME.toLowerCase(), componentNameInLowerCase );
    const fielNameAndPath = `${newComponentFolder}${fileName}`;
    const content = readFile( fielNameAndPath );
    
    // Replace all occurences of the template name with the component name
    let updatedContent = ReplaceAllOccurences( content, SETTINGS.TEMPLATE_NAME, componentName );
    
    // Replace all occurences of the template name in lowercase with the component name in lowercase
    updatedContent = ReplaceAllOccurences(
      updatedContent, SETTINGS.TEMPLATE_NAME.toLocaleLowerCase(), componentName.toLocaleLowerCase()
    );

    writeFile( fielNameAndPath, updatedContent );
  }

  function start ()
  {
    if ( ! files.length ) { return; }
    
    var file = files.shift();
    
    progressBar.startItem( file );
    
    copyFile( file ).then( () => {
      modifyFile( file );
      done( file, files );
      start();
    } );
  }
 
  function done ( file, files )
  {
    progressBar.itemDone( file );
    countDown--;
    
    if ( files.length <= 0 )
    {
      term( '\n' );
      process.exit();
    }
  }

  await start();
}

// Helper functions

const readFile = ( file ) => {
  return fs.readFileSync( file, 'utf8' );
}

const writeFile = ( file, content ) => {
  fs.writeFileSync (
    file,
    content,
    {
      encoding: 'utf8'
    }
  );
}

const replaceString = ( str, find, replace ) => {
  return str.replace( new RegExp( find, 'g' ), replace );
}

const ReplaceAllOccurences = ( str, find, replace ) => {
  return str.split( find ).join( replace );
}

const createFolderIfNotExists = ( folder ) => {
  if ( !fs.existsSync( folder ) ) {
    fs.mkdirSync( folder );
  }
}

const getAllFilesInFolder = ( folder ) => {
  const files = [];
  
  fs.readdirSync( folder ).forEach( file => {
    files.push( file );
  } );

  return files;
}

// Main function to start the process
const  main = () => {
  const guiSteps = () => inputComponentName( guiStep2 );
  const guiStep2 = () => inputComponentType( guiStep3 );
  const guiStep3 = () => feedbackInput( guiStep4 );
  const guiStep4 = async () => { await creatingComponent() };

  t.terminal( 'Component Scaffolding\n' );
  guiSteps(); // Execute GUI steps
};

// Start the process
main();
