"use client";
import React, { createContext, useContext, useState } from "react";
import { users } from "@/users";

interface UserContextType {
    currentUser: typeof users[0] | null;
    setCurrentUser: (user: typeof users[0] | null) => void;
    signOut: () => void;
}

interface UserProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FunctionComponent<UserProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<typeof users[0] | null>(users[0]);

    const signOut = () => {
        setCurrentUser(null);
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
