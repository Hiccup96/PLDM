import React from 'react';

// A utility component for consistent slide layout
const Slide: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`w-full h-full flex flex-col items-center justify-center text-center ${className}`}>
        {children}
    </div>
);

const Title = ({ children }: { children: React.ReactNode }) => <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">{children}</h1>;
const Subtitle = ({ children }: { children: React.ReactNode }) => <p className="text-lg md:text-xl text-gray-300">{children}</p>;
const Body = ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={`mt-8 text-left text-gray-300 w-full max-w-4xl text-base md:text-lg ${className}`}>{children}</div>;
const Code = ({ children }: { children: React.ReactNode }) => <code className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-md text-sm">{children}</code>;


// --- SLIDE 1: Title ---
const TitleSlide = (
    <Slide>
        <Subtitle>An Explainer</Subtitle>
        <Title>The PLDM Firmware Update Process</Title>
        <p className="mt-6 text-gray-400">Based on DMTF Specification DSP0267</p>
    </Slide>
);

// --- SLIDE 2: What is PLDM? ---
const IntroSlide = (
     <Slide>
        <Title>What is PLDM?</Title>
        <Body>
            <ul className="list-disc space-y-4 pl-5">
                <li><strong>PLDM</strong> stands for <strong>Platform Level Data Model</strong>. It's a suite of specifications defined by the DMTF (Distributed Management Task Force).</li>
                <li>It provides a standardized way for system components to communicate for management tasks like inventory, monitoring, and control.</li>
                <li><strong>PLDM for Firmware Update (DSP0267)</strong> specifically defines a robust protocol for updating firmware on compliant devices, ensuring interoperability between different vendors.</li>
            </ul>
        </Body>
    </Slide>
);

// --- SLIDE 3: Base Terminology ---
const BaseSpecTermsSlide = (
    <Slide>
        <Title>PLDM Base Terminology</Title>
        <Subtitle>The building blocks of PLDM communication.</Subtitle>
        <div className="w-full max-w-5xl mt-6 flex flex-col items-center">
            {/* Diagram */}
            <div className="w-full flex justify-between items-center px-8">
                {/* Requester */}
                <div className="flex flex-col items-center">
                    <div className="w-40 h-20 bg-cyan-800 rounded-lg flex items-center justify-center font-bold text-lg">Requester</div>
                    <p className="text-sm text-gray-400 mt-1">(e.g., Update Agent)</p>
                    <p className="text-sm text-gray-400">A <span className="font-bold text-cyan-400">PLDM Terminus</span></p>
                </div>

                {/* Arrows and Message Structures */}
                <div className="flex-1 flex flex-col mx-4">
                    {/* Request Message */}
                    <div className="mb-8">
                        <p className="text-center text-sm text-cyan-300 mb-1">PLDM Request Message →</p>
                        <div className="flex border-2 border-cyan-400 rounded-md bg-gray-700 font-mono text-xs">
                            <div className="p-2 border-r border-cyan-700">Header</div>
                            <div className="p-2 border-r border-cyan-700">Cmd Code</div>
                            <div className="p-2 flex-1 bg-gray-600/50">PLDM Message Payload</div>
                        </div>
                    </div>
                    {/* Response Message */}
                    <div>
                        <p className="text-center text-sm text-amber-300 mb-1">← PLDM Response Message</p>
                         <div className="flex border-2 border-amber-400 rounded-md bg-gray-700 font-mono text-xs">
                            <div className="p-2 border-r border-amber-700">Header</div>
                            <div className="p-2 border-r border-amber-700 text-amber-300">Completion Code</div>
                            <div className="p-2 flex-1 bg-gray-600/50">PLDM Message Payload</div>
                        </div>
                    </div>
                </div>

                {/* Responder */}
                 <div className="flex flex-col items-center">
                    <div className="w-40 h-20 bg-indigo-800 rounded-lg flex items-center justify-center font-bold text-lg">Responder</div>
                    <p className="text-sm text-gray-400 mt-1">(e.g., Firmware Device)</p>
                    <p className="text-sm text-gray-400">A <span className="font-bold text-indigo-400">PLDM Terminus</span></p>
                </div>
            </div>

            {/* Definitions */}
            <div className="mt-6 text-left text-sm w-full grid grid-cols-2 gap-x-6 gap-y-3 px-4">
                <div><strong className="text-cyan-400">PLDM Terminus:</strong> An endpoint in PLDM communication that sends and/or receives messages.</div>
                <div><strong className="text-cyan-400">PLDM Message:</strong> The fundamental unit of communication, composed of a request or a response.</div>
                <div><strong className="text-cyan-400">PLDM Request:</strong> A message sent to initiate an operation.</div>
                <div><strong className="text-cyan-400">PLDM Response:</strong> A message sent back, which includes a <strong className="text-amber-400">Completion Code</strong> to indicate the outcome.</div>
                <div className="col-span-2"><strong className="text-cyan-400">PLDM Message Payload:</strong> Carries the actual command-specific data (in a request) or result data (in a response).</div>
            </div>
        </div>
    </Slide>
);

// --- SLIDE 4: Key Roles ---
import { CpuChipIcon, ServerIcon, ArrowLongRightIcon } from '../components/Icons';
const KeyPlayersSlide = (
    <Slide>
        <Title>The Key Roles</Title>
        <div className="flex flex-col md:flex-row items-center justify-around w-full mt-12 gap-8">
            <div className="flex flex-col items-center text-center">
                <ServerIcon className="w-24 h-24 text-cyan-400" />
                <h3 className="text-2xl font-semibold mt-4">Update Agent (UA)</h3>
                <p className="text-gray-400 max-w-xs mt-2">The orchestrator. Typically a management controller (like a BMC) that reads the update package and sends commands to the target device.</p>
            </div>
            <div className="text-cyan-400 my-4 md:my-0">
                <p className="text-sm mb-1">PLDM Commands</p>
                <ArrowLongRightIcon className="w-24 h-24 -rotate-90 md:rotate-0" />
            </div>
            <div className="flex flex-col items-center text-center">
                <CpuChipIcon className="w-24 h-24 text-cyan-400" />
                <h3 className="text-2xl font-semibold mt-4">Firmware Device (FD)</h3>
                <p className="text-gray-400 max-w-xs mt-2">The target. A device (e.g., a NIC, HBA, or other peripheral) that receives the firmware, verifies it, and applies the update.</p>
            </div>
        </div>
    </Slide>
);

// --- SLIDE 5: Terminology Diagram ---
const TerminologyDiagramSlide = (
    <Slide>
        <Title>Core Concepts & Terminology</Title>
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-4 relative p-4 text-sm">
            {/* Quadrant 1: UA */}
            <div className="flex flex-col items-center justify-center bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">1. The Orchestrator</h3>
                <h4 className="text-lg font-semibold">Update Agent (UA)</h4>
                <p className="text-gray-400 mt-1 text-center">Initiates and manages the entire update process by reading the package and sending commands.</p>
            </div>

            {/* Quadrant 2: Package */}
            <div className="flex flex-col items-center justify-center bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">2. The Data Source</h3>
                <h4 className="text-lg font-semibold">Firmware Update Package</h4>
                <div className="w-full max-w-xs mt-2 border border-gray-500 rounded p-2 font-mono text-center bg-gray-900/30">
                    <div>Package Header</div>
                    <hr className="my-1 border-gray-500"/>
                    <div>Payload (Component Images)</div>
                </div>
            </div>

            {/* Quadrant 4: Activation */}
             <div className="flex flex-col items-center justify-center bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                 <h3 className="text-xl font-bold text-cyan-400 mb-2">4. The Final Step</h3>
                <h4 className="text-lg font-semibold">Activation</h4>
                <p className="text-gray-400 mt-1 text-center">The process of making the new <code className="bg-gray-900 text-amber-400 px-1 rounded">Pending Image</code> the <code className="bg-gray-900 text-green-400 px-1 rounded">Active Image</code>, often requiring a reboot.</p>
            </div>

            {/* Quadrant 3: FD */}
            <div className="flex flex-col items-center justify-center bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">3. The Target</h3>
                <h4 className="text-lg font-semibold">Firmware Device (FD)</h4>
                <p className="text-gray-400 mt-1 mb-2 text-center">Receives commands and firmware data.</p>
                <div className="w-full max-w-xs mt-1 border border-gray-500 rounded p-2 font-mono text-center bg-gray-900/30">
                    <div>Firmware Component</div>
                    <hr className="my-1 border-gray-500"/>
                    <div className="text-green-400">Active Image</div>
                    <div className="text-amber-400">Pending Image</div>
                </div>
            </div>

            {/* SVG Arrows */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
                <defs>
                    <marker id="term-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-cyan-400" />
                    </marker>
                </defs>
                {/* 1 -> 2 */}
                <path d="M 480 125 H 520" stroke="currentColor" strokeWidth="2" className="text-cyan-400" markerEnd="url(#term-arrow)" fill="none" />
                <text x="370" y="115" fill="#9ca3af" textAnchor="middle">UA reads Package</text>
                
                {/* 2 -> 3 */}
                <path d="M 750 255 V 275 L 250 275 V 375" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-cyan-400" markerEnd="url(#term-arrow)" fill="none" />
                <text x="500" y="260" fill="#9ca3af" textAnchor="middle">UA sends Component Images to FD</text>

                {/* 3 -> 4 */}
                <path d="M 480 375 H 520" stroke="currentColor" strokeWidth="2" className="text-cyan-400" markerEnd="url(#term-arrow)" fill="none" />
                 <text x="370" y="365" fill="#9ca3af" textAnchor="middle">UA triggers Activation</text>
            </svg>
        </div>
    </Slide>
);


export const slides = [
  TitleSlide,
  IntroSlide,
  BaseSpecTermsSlide,
  KeyPlayersSlide,
  TerminologyDiagramSlide
];
