import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="mx-auto flex flex-1 items-center justify-center p-4">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <CardTitle>404 - Page Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p>The page you are looking for does not exist.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" className="justify-center" asChild>
                <Link to="/">Go Back To Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}

export default NotFound;
