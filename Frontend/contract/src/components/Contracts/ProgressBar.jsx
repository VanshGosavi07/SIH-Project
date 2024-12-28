import React from "react";

const STATUS_CHOICES = ['Initiated', 'In Progress', 'Completed'];
const SUB_STATUS_CHOICES = [
  'Initiated',
  'Production Stage',
  'Harvest and Collection Stage',
  'Payment',
  'Completed',
];

const ProgressBar = ({ currentStatus, currentSubStatus }) => {
  const getStatusClass = (status) => {
    if (status === currentStatus) return 'bg-green-600 text-white';
    if (STATUS_CHOICES.indexOf(status) < STATUS_CHOICES.indexOf(currentStatus))
      return 'bg-green-700 text-white'; // Darker color for completed stages
    return 'bg-blue-100 text-black'; // Neutral color for uncompleted stages
  };

  const getSubStatusClass = (subStatus) => {
    if (subStatus === currentSubStatus) return 'bg-blue-600 text-white';
    if (
      SUB_STATUS_CHOICES.indexOf(subStatus) <
      SUB_STATUS_CHOICES.indexOf(currentSubStatus)
    )
      return 'bg-blue-700 text-white'; // Darker color for completed sub-stages
    return 'bg-blue-100 text-black'; // Neutral color for uncompleted sub-stages
  };

  const getLineClass = (index, isSubStatus = false) => {
    const choices = isSubStatus ? SUB_STATUS_CHOICES : STATUS_CHOICES;
    const currentIndex = choices.indexOf(isSubStatus ? currentSubStatus : currentStatus);

    if (index < currentIndex) return 'bg-green-700'; // Dark green for completed lines
    return 'bg-gray-300'; // Neutral color for uncompleted lines
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4 border p-2 rounded-lg">
        {STATUS_CHOICES.map((status, index) => (
          <React.Fragment key={status}>
            <div className={`py-1 px-2 text-sm rounded-full ${getStatusClass(status)}`}>
              {status}
            </div>
            {index < STATUS_CHOICES.length - 1 && (
              <div className={`flex-1 h-1 ${getLineClass(index)}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      {currentStatus === 'In Progress' && (
        <div className="flex justify-between items-center border p-2 rounded-lg">
          {SUB_STATUS_CHOICES.map((subStatus, index) => (
            <React.Fragment key={subStatus}>
              <div
                className={`py-1 px-2 text-sm rounded-full ${getSubStatusClass(
                  subStatus
                )}`}
              >
                {subStatus}
              </div>
              {index < SUB_STATUS_CHOICES.length - 1 && (
                <div className={`flex-1 h-1 ${getLineClass(index, true)}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
