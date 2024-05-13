import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
