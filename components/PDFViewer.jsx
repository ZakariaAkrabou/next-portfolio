'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <motion.div 
      className="pdf-container w-full max-w-3xl mx-auto p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-200">My Resume</h2>
          <motion.a
            href="/resume.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>
        </div>
        
        <div className="pdf-viewer-container overflow-auto max-h-[70vh] rounded-lg">
          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex justify-center"
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-lg"
            />
          </Document>
        </div>
        
        {numPages > 1 && (
          <div className="mt-4 flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-700 text-white px-3 py-1 rounded-md disabled:opacity-50"
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
            >
              Previous
            </motion.button>
            <p className="text-gray-300">
              Page {pageNumber} of {numPages}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-700 text-white px-3 py-1 rounded-md disabled:opacity-50"
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= numPages}
            >
              Next
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PDFViewer;
