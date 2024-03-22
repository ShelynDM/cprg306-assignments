"use client";
//import Link from "next/link";
import ShoppingList from "./shopping-list/page";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const signIn = async () => {
    await gitHubSignIn();
    }

    const signOut = async () => {
    await firebaseSignOut();
    }
     
    return (
        <div>
                {user ? (
                <div >
                    <div className="flex flex-row w-full bg-zinc-500 justify-between p-1 ">
                        <div className="ml-2">
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                        </div>

                        <div className="self-center justify-center">
                            <button onClick={signOut} className="p-1 bg-slate-800 hover:bg-red-700 mr-2 ring-1 ring-white">Sign Out</button>
                        </div>
                    </div>
                    <div className="p-2 text-5xl bg-slate-800 ">
                        <h1 className="text-center">Week 10</h1>
                    </div>
                    <div>
                        <ShoppingList />
                    </div>


                </div>
                ) : (
                <div className="flex flex-col items-center m-52 ">
                    <div className="m-10 p-4 text-5xl ">
                        <h1>Week 8</h1>
                    </div>
                    <div className="flex justify-end">
                    <button onClick={signIn} className="m-10 p-4 bg-slate-800 hover:bg-blue-600 ">Sign in with GitHub</button>
                    </div>
                </div>
                )}
        </div>
    );
}