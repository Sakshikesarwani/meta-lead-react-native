export function getFieldValue(fieldData, fieldName) {
  const field = fieldData?.find((item) => item.name === fieldName);

  return field?.values?.[0] || "";
}

export function formatTime(createdTime) {
  if (!createdTime) {
    return "";
  }

  const date = new Date(createdTime);
  const now = new Date();

  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) {
    return "Just now";
  }

  const minutes = Math.floor(diff / 60);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h ago`;
  }

  const days = Math.floor(hours / 24);

  return `${days}d ago`;
}

export function convertLead(lead) {
  const email = getFieldValue(lead.field_data, "email");

  return {
    id: lead.id,
    name: "Bablee",
    email: email,
    source: "Facebook Lead Ad",
    time: formatTime(lead.created_time),
  };
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
