// src/NotFound.js

import React from 'react';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <motion.div 
                className="error-message"
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                <h1>404</h1>
                <p>Page Not Found</p>
            </motion.div>
            <motion.div
                className="animated-404"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <p>The page you are looking for does not exist.</p>
            </motion.div>
        </div>
    );
};

export default NotFound;
