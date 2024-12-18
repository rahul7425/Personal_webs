import React from "react";

export default function Cblogs() {
  return (
    <>
      <div style={{ width: "100%", height: "" }}>
        <div class="flex justify-center items-center bg-white">
          <div class="container mx-auto my-4 px-4 lg:px-20">
            <div
              class="w-full p-4 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
              style={{ height: "100%",marginTop:"-30vh",marginLeft:"10vw"}}
            >
              <div class="flex">
                <h1 class="font-bold uppercase  text-4xl" style={{marginBottom:"-20px"}}>
                  Create Blog
                </h1>
              </div>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
                <input
                  class="w-full mt-2 p-3 rounded-lg "
                  type="text"
                  placeholder="Title*"
                />
                <input
                  class="w-full mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Bio"
                />
                <input
                  class="w-full p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Image"
                //   style={{marginTop:"-20px"}}
                />
                <input
                  class="w-full  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Author"
                //   style={{marginTop:"-20px"}}
                />
              </div>
              <div class="my-4">
                <textarea
                  placeholder="Description*"
                  class="w-full h-32  mt-2 p-3 rounded-lg "
                ></textarea>
              </div>
              <div class="my-2 w-1/2 lg:w-1/4">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                >
                  Create Blog
                </button>
              </div>
            </div>

            
          </div>
        </div>

      </div>
    </>
  );
}
