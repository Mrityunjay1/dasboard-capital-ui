function LeftContent() {
  return (
    <div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Serach by name, edu, exp or #tag"
          className="input w-full max-w-lg bg-slate-50 text-gray-600 block pl-10 placeholder:text-sm border border-gray-300"
        />
      </div>
      <div className="card w-full mt-4 bg-white shadow-xl">
        <div className="card-body p-0">
          <div className="flex items-center justify-between p-4">
            <div>
              <h2 className="card-title text-black">Filters</h2>
            </div>
            <div>
              <p className="text-sm text-black">0 selected</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white w-full">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm text-black font-medium">
              Personal Information
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm text-black font-medium">
              Education
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm text-black font-medium">
              Work Experience
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContent;
