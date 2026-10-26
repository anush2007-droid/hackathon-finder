import { useState } from "react";

const initialEvents = [
  {
    id: 1,
    title: "HackSprint 2026",
    category: "Hackathon",
    date: "2026-11-14",
    location: "Online",
    mode: "Online",
    price: "Free",
    prize: "₹50,000",
    organizer: "Tech Community",
    description:
      "Build innovative solutions, collaborate with developers, and showcase your ideas.",
    link: "https://devpost.com/"
  },
  {
    id: 2,
    title: "Embedded Systems Workshop",
    category: "Workshop",
    date: "2026-11-06",
    location: "Coimbatore",
    mode: "Offline",
    price: "Free",
    prize: "Certificate",
    organizer: "Electronics Club",
    description:
      "Learn microcontrollers, sensors, embedded programming, and practical electronics.",
    link: "https://www.eventbrite.com/"
  },
  {
    id: 3,
    title: "CodeQuest Challenge",
    category: "Coding",
    date: "2026-11-21",
    location: "Online",
    mode: "Online",
    price: "Free",
    prize: "₹25,000",
    organizer: "Coding Community",
    description:
      "Test your programming skills through coding challenges and problem-solving tasks.",
    link: "https://www.hackerrank.com/"
  },
  {
    id: 4,
    title: "FutureTech Symposium",
    category: "Symposium",
    date: "2026-11-12",
    location: "Chennai",
    mode: "Offline",
    price: "₹150",
    prize: "Awards",
    organizer: "Innovation Cell",
    description:
      "Participate in technical presentations, project exhibitions, and student competitions.",
    link: "https://www.eventbrite.com/"
  },
  {
    id: 5,
    title: "AI and IoT Workshop",
    category: "Technical Event",
    date: "2026-12-02",
    location: "Coimbatore",
    mode: "Hybrid",
    price: "₹100",
    prize: "Certificate",
    organizer: "Innovation Lab",
    description:
      "Explore artificial intelligence, Internet of Things, and hands-on project development.",
    link: "https://www.meetup.com/"
  },
  {
    id: 6,
    title: "Student Internship Connect",
    category: "Internship",
    date: "2026-11-09",
    location: "Online",
    mode: "Online",
    price: "Free",
    prize: "Career opportunities",
    organizer: "Career Development Cell",
    description:
      "Explore internships and learn how to improve your resume and technical portfolio.",
    link: "https://internshala.com/"
  }
];

const categories = [
  "All",
  "Hackathon",
  "Technical Event",
  "Workshop",
  "Symposium",
  "Coding",
  "Internship"
];

function App() {
  const [events, setEvents] = useState(initialEvents);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mode, setMode] = useState("All");
  const [saved, setSaved] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "Hackathon",
    date: "",
    location: "",
    mode: "Online",
    price: "Free",
    prize: "",
    organizer: "",
    description: "",
    link: ""
  });

  const toggleSaved = (id) => {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      `${event.title} ${event.category} ${event.location} ${event.organizer}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    const matchesMode = mode === "All" || event.mode === mode;

    const matchesSaved = !showSaved || saved.includes(event.id);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMode &&
      matchesSaved
    );
  });

  const submitEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      ...form,
      id: Date.now()
    };

    setEvents((previous) => [newEvent, ...previous]);
    setForm({
      title: "",
      category: "Hackathon",
      date: "",
      location: "",
      mode: "Online",
      price: "Free",
      prize: "",
      organizer: "",
      description: "",
      link: ""
    });

    setShowForm(false);
    setShowSaved(false);
    setCategory("All");
    setSearch("");
  };

  return (
    <div className="app">
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setShowSaved(false)}
        >
          <span className="logo-icon">E</span>
          EventSphere
        </a>

        <nav>
          <button onClick={() => setShowSaved(false)}>
            Explore
          </button>

          <button onClick={() => setShowSaved(true)}>
            Saved ({saved.length})
          </button>

          <button
            className="submit-button"
            onClick={() => setShowForm(true)}
          >
            + Submit Event
          </button>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR NEXT OPPORTUNITY STARTS HERE
            </span>

            <h1>
              Discover events.
              <br />
              <span>Build your future.</span>
            </h1>

            <p>
              Find hackathons, workshops, symposiums, coding
              competitions, and internships in one place.
            </p>

            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("explore")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Events →
            </button>

            <div className="hero-stats">
              <div>
                <strong>{events.length}+</strong>
                <span>Events listed</span>
              </div>
              <div>
                <strong>7</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Student focused</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle circle-one"></div>
            <div className="art-circle circle-two"></div>

            <div className="art-center">
              <span>✦</span>
            </div>

            <div className="floating-card card-one">
              <span className="floating-icon purple">⌘</span>
              <div>
                <strong>Hackathons</strong>
                <small>Build something new</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span className="floating-icon green">↗</span>
              <div>
                <strong>New opportunities</strong>
                <small>Make your next move</small>
              </div>
            </div>
          </div>
        </section>

        <section className="explore" id="explore">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE OPPORTUNITIES</span>

              <h2>
                {showSaved ? "Your saved events" : "Find your next big thing"}
              </h2>

              <p>
                Discover opportunities to learn, compete, and connect.
              </p>
            </div>
          </div>

          <div className="filters">
            <input
              type="search"
              placeholder="Search events, skills, or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="All">All modes</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "chip active" : "chip"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="results">
            {filteredEvents.length} events found
          </div>

          {filteredEvents.length > 0 ? (
            <div className="event-grid">
              {filteredEvents.map((event) => (
                <article className="event-card" key={event.id}>
                  <div className={`event-cover cover-${event.category.replace(/\s/g, "-")}`}>
                    <span className="event-category">
                      {event.category}
                    </span>

                    <button
                      className={
                        saved.includes(event.id)
                          ? "bookmark saved"
                          : "bookmark"
                      }
                      onClick={() => toggleSaved(event.id)}
                      aria-label="Save event"
                    >
                      {saved.includes(event.id) ? "♥" : "♡"}
                    </button>

                    <span className="cover-symbol">✦</span>
                  </div>

                  <div className="event-body">
                    <div className="event-organizer">
                      {event.organizer}
                    </div>

                    <h3>{event.title}</h3>

                    <div className="event-detail">
                      <span>📅 {new Date(event.date + "T12:00:00").toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}</span>

                      <span>📍 {event.location}</span>
                    </div>

                    <div className="event-footer">
                      <div>
                        <strong>{event.price}</strong>
                        <small>{event.prize}</small>
                      </div>

                      <button
                        className="details-button"
                        onClick={() => setSelected(event)}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No events found</h3>
              <p>Try changing your search or category filters.</p>

              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setMode("All");
                  setShowSaved(false);
                }}
              >
                Show all events
              </button>
            </div>
          )}
        </section>

        <section className="submit-banner">
          <div>
            <span className="eyebrow">GROW THE COMMUNITY</span>
            <h2>Know an exciting event?</h2>
            <p>Share it with students and help them discover new opportunities.</p>
          </div>

          <button
            className="primary-button"
            onClick={() => setShowForm(true)}
          >
            + Submit an Event
          </button>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          <span className="logo-icon">E</span>
          EventSphere
        </a>

        <p>Made for students. Built for what's next.</p>

        <span>© 2026 EventSphere</span>
      </footer>

      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <section
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span className="eyebrow">{selected.category}</span>

            <h2>{selected.title}</h2>

            <p className="modal-organizer">
              Organized by {selected.organizer}
            </p>

            <p>{selected.description}</p>

            <div className="modal-details">
              <p><strong>Date:</strong> {selected.date}</p>
              <p><strong>Location:</strong> {selected.location}</p>
              <p><strong>Mode:</strong> {selected.mode}</p>
              <p><strong>Entry:</strong> {selected.price}</p>
              <p><strong>Prize / Benefit:</strong> {selected.prize}</p>
            </div>

            <a
              href={selected.link}
              target="_blank"
              rel="noreferrer"
              className="primary-button registration-link"
            >
              Visit Registration Website ↗
            </a>

            <small className="demo-note">
              Sample listing. Confirm event details with the official organizer.
            </small>
          </section>
        </div>
      )}

      {showForm && (
        <div className="overlay" onClick={() => setShowForm(false)}>
          <section
            className="modal form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <span className="eyebrow">COMMUNITY SUBMISSION</span>
            <h2>Submit an event</h2>
            <p>Add a new opportunity for students to discover.</p>

            <form onSubmit={submitEvent}>
              <label>
                Event title
                <input
                  required
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  placeholder="Enter event title"
                />
              </label>

              <label>
                Organizer
                <input
                  required
                  value={form.organizer}
                  onChange={(e) =>
                    setForm({ ...form, organizer: e.target.value })
                  }
                  placeholder="Organizer name"
                />
              </label>

              <div className="form-row">
                <label>
                  Category
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  >
                    {categories.slice(1).map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Mode
                  <select
                    value={form.mode}
                    onChange={(e) =>
                      setForm({ ...form, mode: e.target.value })
                    }
                  >
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                </label>
              </div>

              <label>
                Event date
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) =>
                    setForm({ ...form, date: e.target.value })
                  }
                />
              </label>

              <label>
                Location
                <input
                  required
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  placeholder="City or Online"
                />
              </label>

              <label>
                Entry fee
                <input
                  required
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                  }
                />
              </label>

              <label>
                Prize or benefit
                <input
                  value={form.prize}
                  onChange={(e) =>
                    setForm({ ...form, prize: e.target.value })
                  }
                  placeholder="Prize pool or certificate"
                />
              </label>

              <label>
                Description
                <textarea
                  required
                  rows="3"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="Describe the event"
                />
              </label>

              <label>
                Official registration URL
                <input
                  required
                  type="url"
                  value={form.link}
                  onChange={(e) =>
                    setForm({ ...form, link: e.target.value })
                  }
                  placeholder="https://example.com"
                />
              </label>

              <button className="primary-button full-width" type="submit">
                Publish Event →
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;