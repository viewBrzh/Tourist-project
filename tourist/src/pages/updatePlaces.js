import "../App.css";
import Main from "../layouts/main";

function UpdatePlace() {
  return <Main>
    <form className="form">
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>ID</span>
        </label>
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Name</span>
        </label>
      </div>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Image</span>
      </label>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Description</span>
      </label>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Latitude</span>
      </label>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Longitude</span>
      </label>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Close Time</span>
      </label>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Open Time</span>
      </label>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Slide Image</span>
      </label>
      <button className="fancy" href="#">
        <span className="top-key"></span>
        <span className="text">Submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  </Main>;
}

export default UpdatePlace;
