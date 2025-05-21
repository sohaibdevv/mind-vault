/*
* NEXTJS TS Alert component
*
* This Component displays an alert message at the top of the screen.
*
* Structure:
* -Left: InformationCircleIcon
* -Center: Alert text
* -Right: Close Button with xMarkIcon
*
* Styles:
* -Position: Fixed at the top of the screen.
* -width: Full width of the screen.
* -padding: Applied to the entire component.
* -Background color: Light blue.
* -Top border: Dark blue.
* -Text color: Dark blue.
*/
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-blue-100 border-t border-blue-500">
      <div className="flex items-center">
        <InformationCircleIcon className="w-6 h-6 text-blue-500" />
        <span className="ml-2 text-blue-700">{message}</span>
      </div>
      <button onClick={onClose} className="p-1">
        <XMarkIcon className="w-6 h-6 text-blue-500" />
      </button>
    </div>
  );
};

export default Alert;
// This component can be used in any part of your Next.js application.