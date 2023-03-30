import React from "react";
import InboxItem from "./InboxItem";
import SearchInput from "./SearchInput";

function InboxPopup({ inboxData }) {
  return (
    <>
      <SearchInput />
      <div className="inbox-list">
        {inboxData.map((inbox, idx) => (
          <InboxItem
            key={idx}
            {...inbox}
          />
        ))}
      </div>
    </>
  );
}

export default InboxPopup;
