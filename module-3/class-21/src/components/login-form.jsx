import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  setInput,
  handleTodo,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>NoteBook</CardTitle>
          <CardDescription>
            Enjoy your life to add your daily tasks !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Input onChange={(e)=> setInput(e.target.value)} id="email" type="text" placeholder="ADD TODO" required />
              </div>
             
              <div className="flex flex-col gap-3">
                <Button onClick={(e)=> handleTodo(e)} type="submit" className="w-full">
                  ADD TODO !
                </Button>
               
              </div>
            </div>
          
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
