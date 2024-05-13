import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "EV-1", title: "Ketaon Fair 2024", image: "", date: "21:00" },
  { id: "EV-2", title: "Jazz Music", image: "", date: "19:30" },
  { id: "EV-3", title: "Prambanan Fest", image: "", date: "01:45" },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((eventData) => (
          <li key={eventData.id}>
            <Link to={eventData.id}>{eventData.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
