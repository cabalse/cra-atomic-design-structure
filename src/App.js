import { useState } from 'react'

import CreateMirageServer from './mirage/create-mirage-server'

import googleMap from './assets/google-maps.png'
import './App.module.css'

if (process.env.REACT_APP_MODE === 'development') {
  CreateMirageServer()
}

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const openDialog = () => {
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row items-center justify-center m-10">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Selected Routes</h2>
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Column 1
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Column 2
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Column 3
                    </th>
                    <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Column 4
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 1, Cell 1
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 1, Cell 2
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 1, Cell 3
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 1, Cell 4
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 2, Cell 1
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 2, Cell 2
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 2, Cell 3
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 2, Cell 4
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 3, Cell 1
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 3, Cell 2
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 3, Cell 3
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      Row 3, Cell 4
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="container mx-auto p-4">
                <div className="flex justify-end">
                  <button
                    onClick={openDialog}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Select Route
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img alt="google map" src={googleMap} />
            </div>
          </div>
        </div>
        {dialogOpen ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Select Route</h2>
              <p className="mb-4">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Column 1
                      </th>
                      <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Column 2
                      </th>
                      <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Column 3
                      </th>
                      <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Column 4
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 1, Cell 1
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 1, Cell 2
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 1, Cell 3
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 1, Cell 4
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 2, Cell 1
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 2, Cell 2
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 2, Cell 3
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 2, Cell 4
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 3, Cell 1
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 3, Cell 2
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 3, Cell 3
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        Row 3, Cell 4
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Select
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
