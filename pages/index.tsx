import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import wishLogo from "../assets/images/wishwork.svg";
import { motion } from "framer-motion";

const Home: NextPage = () => {
    return (
        <div className="bg-gray-800 h-screen w-screen flex justify-center items-center">
            <Head>
                <title>Wish Work Next.js Boilerplate</title>
                <meta
                    name="description"
                    content="A Next.js 12 boilerplate made by the people of Wish Work"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                <motion.div
                    animate={{ scale: [0.85, 1, 0.85] }}
                    transition={{ repeat: Infinity, type: "spring", duration: 10 }}
                >
                    <Image src={wishLogo} alt="Wish Work Logo" width={200} height={200} />
                </motion.div>
                <div className="text-white text-center font-bold text-2xl">Wish Work</div>
            </main>
        </div>
    );
};

export default Home;
