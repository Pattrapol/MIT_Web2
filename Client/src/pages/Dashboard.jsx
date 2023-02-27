import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import Datepicker from '../partials/actions/Datepicker';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';



function Dashboard() {
  const [maskList, setMaskList] = useState([]);
  const getMaskList = () => {
    Axios.get('http://localhost:3001/').then((response) => {
      setMaskList(response.data);
    });
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
            <button class="btn btn-primary" onClick={getMaskList}>
                Show Status
              </button>
              {maskList.map((val, key) => {
                return (
                  <div className="">
                    <div className="">
                      <p className="card-text">Name: {val.Status}</p>
                    </div>
                  </div>
                )
              })}
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                 */}
              </div>

            </div>
            <div >
              <DashboardCard04 />
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;