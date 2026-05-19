import { useState } from "react";

const styles = {
  card: "d-flex flex-column bg-white rounded-2 my-2 px-2",
  story: "d-flex flex-column my-2 w-100",
  storyTitle: "my-0 fw-semibold text-truncate w-100 cursor-pointer",
};

const stories = [
  {
    title: "Jury rejects Elon Musk suit against Sam Altman, Open AI",
    posted: "9h ago",
    readers: 132.0,
  },
  {
    title: "NextExtra acquiring Dominion in massive $67Bn power tie-up",
    posted: "9h ago",
    readers: 61.0,
  },
  {
    title: "Spotify ditches beyons awful annyversary logo update",
    posted: "9h ago",
    readers: 27.0,
  },
  {
    title: "TSA looking to relieve airport crowds with remote security",
    posted: "9h ago",
    readers: 10.0,
  },
  {
    title: "Sony to raise subscription prices for Playstation Plus",
    posted: "9 hours ago",
    readers: 6.0,
  },
  {
    title: "Demand is high for this six-figure, AI-proof role",
    posted: "9h ago",
    readers: 2.0,
  },
  {
    title: "Lululemon fires back at founder as proxy war escalates",
    posted: "4h ago",
    readers: 19.0,
  },
  {
    title: "Meta employees hit by sense of dread as layoffs loom",
    posted: "4h ago",
    readers: 4.0,
  },
  {
    title: "The masters degree is losing its edge in the job market",
    posted: "4h ago",
    readers: 2.0,
  },
  {
    title: "Amazon Alexa+ will now offer AI-generated podcasts",
    posted: "4h ago",
    readers: 230,
  },
];

const SidebarDx = () => {
  const [expand, setExpand] = useState(false);

  const visibleStories = expand
    ? stories
    : stories.slice(0, Math.ceil(stories.length / 2));

  return (
    <section className="d-flex flex-column">
      <div className={styles.card}>
        <div className="d-flex justify-content-between p-2 mx-3">
          <h5>LinkedIn Notizie</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </div>

        <div className="d-flex justify-content-center">
          <div className="w-100">
            <h6 className="text-secondary">Storie Principali</h6>

            {visibleStories.map((story, index) => (
              <div className={styles.story} key={index}>
                <p className={styles.storyTitle}>{story.title}</p>

                <small>
                  {story.posted} &middot; {story.readers} readers
                </small>
              </div>
            ))}

            <button className="btn" onClick={() => setExpand((prev) => !prev)}>
              {expand ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h4>LinkedIn Puzzles</h4>
      </div>
    </section>
  );
};

export default SidebarDx;
