import './index.css'

const Home = () => (
  <div className="container">
    <div>
      <h1 className="txt">Find The Job That Fits Your Life</h1>
      <p className="txt">
        Millions of people are searching for jobs,salary information,company
        reviews.find the job that fits ability and potential.
      </p>
      <button type="button" className="jobsButton">
        Find Jobs
      </button>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
      alt="home-logo"
      className="home-img"
    />
  </div>
)

export default Home
