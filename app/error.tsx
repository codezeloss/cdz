"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-900 z-50">
        <div className="w-full max-w-md p-8">
          <motion.div
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
              <Image
                  className="w-64 h-64 drop-shadow-lg"
                  src="/error-illustration.svg"
                  alt="Error illustration"
                  width={256}
                  height={256}
                  priority
              />
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                  className="text-3xl font-bold text-neutral-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
              >
                Oops! Something went wrong
              </motion.h1>
              <motion.p
                  className="text-neutral-600 dark:text-neutral-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
              >
                Don&apos;t worry, we&apos;re on it. In the meantime, you can:
              </motion.p>
            </div>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
              <Button
                  variant="default"
                  size="lg"
                  onClick={() => reset()}
                  className="flex items-center gap-2 flex-1"
              >
                <RefreshCcw className="w-4 h-4" />
                Try Again
              </Button>

              <Link href="/" className="flex-1">
                <Button
                    variant="outline"
                    size="lg"
                    className="w-full flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </Button>
              </Link>
            </motion.div>

            {error.digest && (
                <motion.p
                    className="text-xs text-neutral-500 dark:text-neutral-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                  Error ID: {error.digest}
                </motion.p>
            )}
          </motion.div>
        </div>
      </div>
  );
}