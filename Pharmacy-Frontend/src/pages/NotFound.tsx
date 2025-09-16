import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-wellness px-4 text-center">
      <h1 className="text-8xl font-bold text-trust mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-trust mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let’s get
        you back on track.
      </p>
      <Link to="/">
        <Button size="lg" className="bg-accent hover:bg-accent/90">
          <Home className="w-5 h-5 mr-2" /> Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
