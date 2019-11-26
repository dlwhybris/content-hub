import React from "react"

function TestComponent() {
  return (
    <div className="">
      <div class="relative pb-5/6">
        <img
          class="absolute h-full w-full object-cover rounded-lg shadow-md"
          src="https://source.unsplash.com/random"
        />
      </div>
      <div class="relative px-4 -mt-16">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-baseline">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
            <p>no idea</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestComponent
