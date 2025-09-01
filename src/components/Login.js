import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const [pw, setPw] = useState("");
  const [capsOn, setCapsOn] = useState(false);

  const name = useRef(null);
  const email = useRef(null);

  const checkSignIn = (em, pass) => {
    const emailRe = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,})$/;
    if (!emailRe.test(em)) return "Email ID is not valid";
    if (!pass) return "Enter your password";
    return null;
  };

  const friendlyError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Email or password is incorrect.";
      case "auth/weak-password":
        return "Password must be 8+ chars with uppercase, lowercase, and a number.";
      case "auth/email-already-in-use":
        return "This email is already registered.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleAuth = async () => {
    const em = (email.current?.value || "").trim();
    const pass = pw;

    const msg = (isSignInForm ? checkSignIn : checkValidData)(em, pass);
    setErrorMessage(msg || "");
    if (msg) return;

    setLoading(true);
    try {
      if (isSignInForm) {
        await signInWithEmailAndPassword(auth, em, pass);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, em, pass);
        await updateProfile(cred.user, {
          displayName: (name.current?.value || "").trim(),
          photoURL: USER_AVATAR,
        });
      }
    } catch (err) {
      setErrorMessage(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) handleAuth();
  };

  const toggleMode = () => {
    setIsSignInForm((v) => !v);
    setErrorMessage("");
    setPw("");
    setShowPw(false);
    setCapsOn(false);
  };

  // password rules for live hint (sign-up only)
  const rules = {
    len: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /\d/.test(pw),
  };

  return (
    <div className="relative min-h-screen">
      {/* background + overlays */}
      <div className="fixed inset-0 z-0">
        <img className="h-full w-full object-cover" src={BG_URL} alt="background" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.45)_35%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0)_80%)]" />
      </div>

      <Header />

      <main
        className={`relative z-10 flex min-h-screen items-center justify-center px-4 pb-12 ${
          isSignInForm ? "pt-20" : "pt-28"
        } md:pt-24 lg:pt-16`}
      >
        <form
          onSubmit={handleSubmit}
          aria-busy={loading}
          className="w-full max-w-[450px] p-8 sm:p-10 lg:p-12 bg-zinc-950/85 backdrop-blur-md text-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
        >
          <h1 className="font-bold text-4xl tracking-tight">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          <div className="mt-6 space-y-4">
            {!isSignInForm && (
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                  className="block w-full h-12 rounded-md bg-neutral-800/80 text-[16px] px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                ref={email}
                type="email"
                placeholder="Email Address"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="email"
                required
                className="block w-full h-12 rounded-md bg-neutral-800/80 text-[16px] px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                value={pw}
                onChange={(e) => {
                  setPw(e.target.value);
                  setErrorMessage("");
                }}
                onKeyUp={(e) => setCapsOn(e.getModifierState && e.getModifierState("CapsLock"))}
                type={showPw ? "text" : "password"}
                placeholder="Password"
                autoComplete={isSignInForm ? "current-password" : "new-password"}
                pattern={
                  isSignInForm ? undefined : "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()_\\-+=,.?~]{8,}"
                }
                title={isSignInForm ? undefined : "At least 8 characters, with 1 uppercase, 1 lowercase, and 1 number."}
                minLength={isSignInForm ? 1 : 8}
                required
                className="block w-full h-12 rounded-md bg-neutral-800/80 text-[16px] px-4 pr-14 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-describedby={!isSignInForm ? "pw-help" : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm opacity-90 hover:opacity-100"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "Hide" : "Show"}
              </button>
              {capsOn && <p className="mt-1 text-xs text-yellow-300">Caps Lock is on</p>}
            </div>

            {!isSignInForm && (
              <p id="pw-help" className="mt-1 text-[13px] leading-5 text-neutral-400">
                Must be{" "}
                <span className={rules.len ? "text-emerald-400" : "text-neutral-500"}>8+ chars</span>,{" "}
                <span className={rules.upper ? "text-emerald-400" : "text-neutral-500"}>1 uppercase</span>,{" "}
                <span className={rules.lower ? "text-emerald-400" : "text-neutral-500"}>1 lowercase</span>,{" "}
                <span className={rules.digit ? "text-emerald-400" : "text-neutral-500"}>1 number</span>.
              </p>
            )}
          </div>

          {errorMessage && (
            <p role="alert" className="mt-2 text-red-400 font-medium text-sm" aria-live="polite">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full h-12 rounded-md bg-red-700 hover:bg-red-600 active:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
          >
            {loading ? (isSignInForm ? "Signing In..." : "Creating Account...") : isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-4 text-center text-sm">
            <button type="button" onClick={toggleMode} className="underline underline-offset-4 hover:no-underline">
              {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
