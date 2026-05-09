"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/goru.png"}
            alt="logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <h3 className="font-black text-lg">বিরাট গরু ছাগলের হাট
            
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/allphotos">All Goru</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Auth Buttons (desktop only) */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link href="/signup">SignUp</Link>
                <Link href="/signin">SignIn</Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <Button
                  onClick={handleSignOut}
                  size="sm"
                  variant="danger"
                >
                  SignOut
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/allphotos" onClick={() => setOpen(false)}>All Goru</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>Profile</Link>

          {!user ? (
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/signup" onClick={() => setOpen(false)}>SignUp</Link>
              <Link href="/signin" onClick={() => setOpen(false)}>SignIn</Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-2">
              <Button onClick={handleSignOut} size="sm" variant="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;