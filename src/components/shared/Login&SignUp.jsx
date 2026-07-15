import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const LoginSignUp = () => {
    return (
        <div className="flex items-center gap-3">
            <Link href="/auth/login">
                <Button variant="outline" className="cursor-pointer">
                    Login
                </Button>
            </Link>

            <Link href="/auth/signup">
                <Button className="cursor-pointer">
                    Sign Up
                </Button>
            </Link>
        </div>
    );
};

export default LoginSignUp;