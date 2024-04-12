"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const signIn = async () => {
    await gitHubSignIn();
    }

    // Sign in to Firebase with Google authentication
    const signInGoogle = async () => {
    await googleSignIn();
    }

    const signOut = async () => {
    await firebaseSignOut();
    }
     
    return (
        <div className="flex flex-col items-center m-52 ">
            <div className="m-10 p-4 text-5xl ">
                <h1>Week 8</h1>
            </div>
            <div>
                {user ? (
                <div>
                    <div>
                        <p className="text-center m-2 font-semibold ">Welcome!</p>
                        <p className="mt-4">{user.displayName}</p>
                        <p className="mb-4">{user.email}</p>
                        <p className="hover:text-blue-400 hover:underline text-center m-6">
                            <Link href = "/week-8/shopping-list">Shopping List</Link>
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={signOut} className="p-2 bg-slate-800 hover:bg-red-700">Sign Out</button>
                    </div>

                </div>
                ) : (
                <div>
                    <button onClick={signIn} className="m-10 p-4 bg-slate-800 hover:bg-blue-600 ">Sign in with GitHub</button>
                    <button onClick={signInGoogle} className="m-10 p-4 bg-slate-800 hover:bg-blue-600 ">Sign in with Google</button>
                </div>
                )}
            </div>
        </div>
    );
}