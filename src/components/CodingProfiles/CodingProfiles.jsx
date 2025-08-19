import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./CodingProfiles.css";

const CodingProfiles = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const leetcode = {
    username: "Sai_ganesh_0004",
    problems: 104,
    contests: 15,
    rating: "1780",
    profileUrl: "https://leetcode.com/u/Sai_ganesh_0004/",
  };

  const codeforces = {
    username: "Sai_ganesh_0004",
    problems: "N/A",
    contests: "N/A",
    rating: "N/A",
    profileUrl: "https://codeforces.com/profile/Sai_ganesh_0004",
  };

  const codechef = {
    username: "sai_ganesh0004",
    problems: 68,
    contests: 18,
    rating: "1760 (3★)",
    profileUrl: "https://www.codechef.com/users/sai_ganesh0004",
  };

  const totalProblems =
    leetcode.problems +
    (typeof codeforces.problems === "number" ? codeforces.problems : 0) +
    codechef.problems;

  const totalContests =
    leetcode.contests +
    (typeof codeforces.contests === "number" ? codeforces.contests : 0) +
    codechef.contests;

  return (
    <section className="coding-profiles-section" ref={ref}>
      <h2 className="section-title reveal">Competitive Coding</h2>

      <div className="summary-cards">
        <div className="summary-card gradient-blue">
          <h3>Total Problems</h3>
          <p>{inView && <CountUp end={totalProblems} duration={2.5} />}</p>
        </div>
        <div className="summary-card gradient-purple">
          <h3>Total Contests</h3>
          <p>{inView && <CountUp end={totalContests} duration={2.5} />}</p>
        </div>
      </div>

      <div className="profile-cards">
        {/* LeetCode Card */}
        <div className="profile-card leetcode-card fade-in">
          <div className="logo-title-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="leetcode-logo"
            />
            <span className="platform-name">LeetCode</span>
          </div>
          <h3>
            <a
              href={leetcode.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {leetcode.username}
            </a>
          </h3>
          <ul>
            <li>
              <span>Problems Solved</span>
              <span>{leetcode.problems}</span>
            </li>
            <li>
              <span>Contests</span>
              <span>{leetcode.contests}</span>
            </li>
            <li>
              <span>Rating</span>
              <span>{leetcode.rating}</span>
            </li>
          </ul>
          <a
            className="profile-link-button"
            href={leetcode.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile →
          </a>
        </div>

        {/* Codeforces Card */}
        <div className="profile-card codeforces-card fade-in">
          <div className="logo-container center-logo">
            <img
              src="https://sta.codeforces.com/s/93947/images/codeforces-logo-with-telegram.png"
              alt="Codeforces"
              className="cf-logo"
            />
          </div>
          <h3>
            <a
              href={codeforces.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {codeforces.username}
            </a>
          </h3>
          <ul>
            <li>
              <span>Problems Solved</span>
              <span>{codeforces.problems}</span>
            </li>
            <li>
              <span>Contests</span>
              <span>{codeforces.contests}</span>
            </li>
            <li>
              <span>Rating</span>
              <span>{codeforces.rating}</span>
            </li>
          </ul>
          <a
            className="profile-link-button"
            href={codeforces.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile →
          </a>
        </div>

        {/* CodeChef Card */}
        <div className="profile-card codechef-card fade-in">
          <div className="logo-container center-logo">
            <img
              src="https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/cc-logo.svg"
              alt="CodeChef"
              className="cc-logo"
            />
          </div>
          <h3>
            <a
              href={codechef.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {codechef.username}
            </a>
          </h3>
          <ul>
            <li>
              <span>Problems Solved</span>
              <span>{codechef.problems}</span>
            </li>
            <li>
              <span>Contests</span>
              <span>{codechef.contests}</span>
            </li>
            <li>
              <span>Rating</span>
              <span>{codechef.rating}</span>
            </li>
          </ul>
          <a
            className="profile-link-button"
            href={codechef.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
