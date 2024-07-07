import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="w-full md:h-[750px] h-[700px] md:mt-16 mt-16 pt-8 grid grid-cols-1">
          <div>
            <h1 className="text-2xl md:text-5xl pt-10">
              Welcome to <span className="text-pink-500">Book Store</span>
              <br />
              <p className="text-base md:text-2xl">
                your ultimate destination for books of all genres and interests.
                At Book store, we believe in the transformative power of reading
                and are committed to bringing the joy of books to every reader.
              </p>
            </h1>
          </div>
          <hr className="border-pink-500"/>
          <div>
            <h1 className="text 2xl md:text-4xl text-pink-500 ">Our Story</h1>
            <p className="text-black md:text-2xl text-base dark:bg-slate-900 dark:text-white">
              Founded in 2024, Book store started with a simple mission: to
              create a haven for book lovers. What began as a small independent
              bookstore has grown into a vibrant community of readers and
              writers, all united by a shared passion for literature.
            </p>
          </div>
          <hr className="border-pink-500" />
          <div>
            <h1 className="text 2xl md:text-4xl text-pink-500">
              Why Choose Us?
            </h1>
            <p className="text-black md:text-2xl text-sm dark:bg-slate-900 dark:text-white">
              Personalized Service: Our knowledgeable staff is always ready to
              help you find the perfect book. <br />
              Community Events: Join us for author signings, book clubs, and
              literary discussions. <br />
              Comfortable Ambiance: Enjoy a cozy and inviting atmosphere perfect
              for leisurely browsing. <br />
              Online Convenience: Browse and shop our extensive collection
              online from the comfort of your home.
            </p>
          </div>
          <hr className="border-pink-500" />
          <h1 className="text-center text-sm">
            Thank you for being a part of our story. We look forward to sharing
            many more chapters with you.
          </h1>
          <h1 className="text-center text-sm text-pink-500">Happy Reading!</h1>
        </div>
      </div>
    </>
  );
};

export default About;
