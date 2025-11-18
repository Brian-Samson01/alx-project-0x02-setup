import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Home Page</h1>

        <Card 
          title="First Card"
          content="This is the first reusable card component."
        />

        <Card 
          title="Second Card"
          content="Here is another example of the card with different text."
        />

        <Card 
          title="Third Card"
          content="You can keep reusing this component with any content you want."
        />
      </main>
    </>
  );
}
