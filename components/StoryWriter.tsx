"use client";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

function StoryWriter() {
  return (
    <div className="flex flex-col container">
        <section className="flex-1 flex flex-col border border-black rounded-md p-10 space-y-2">
            <Textarea />
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="A long or short story" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem>1</SelectItem>
                    <SelectItem>2</SelectItem>
                    <SelectItem>3</SelectItem>
                    <SelectItem>4</SelectItem>
                    <SelectItem>5</SelectItem>
                    <SelectItem>6</SelectItem>
                    <SelectItem>7</SelectItem>
                </SelectContent>
            </Select>
        </section>
        <section className="flex-1 pb-5 mt-5">

        </section>
    </div>
  )
}

export default StoryWriter