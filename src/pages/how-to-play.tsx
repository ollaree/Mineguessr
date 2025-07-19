import Link from "next/link";

export default function HowToPlay() {
  return (
    <main>
      <div className="box inv-background">
        <h2 className="text-center">How To Play</h2>
        <p className="text-center font-bold">
          Your goal is to try to craft the secret item from the ingredients in
          your inventory:
        </p>
        <ol className="list-decimal p-4">
          <li>
            You have <span className="font-bold">10</span> guesses
          </li>
          <li>
            If your guess is incorrect, some of the grid may be coloured to give
            you feedback
          </li>
          <li>
            If the square remains grey, the ingredient you placed here is not in
            the recipe, hmmm...
          </li>
          <li>
            An orange square means that this ingredient is needed somewhere else
            on the grid, but not at the spot...
          </li>
          <li>
            A green square means the ingredient placed on that square is correct
            and in the right spot!
          </li>
        </ol>
        <p className="text-center font-bold">
          Click below to start the game and test your true knowledge of
          Minecraft...Your reputation is on the line!
        </p>
        <p className="text-center">
          <Link href="/" className="text-blue-700">
            Play game!
          </Link>
        </p>
      </div>
    
    </main>
  );
}
