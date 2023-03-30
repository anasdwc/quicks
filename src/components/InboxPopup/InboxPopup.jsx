import React from "react";
import InboxItem from "./InboxItem";
import SearchInput from "./SearchInput";

function InboxPopup() {
  return (
    <>
      <SearchInput />
      <div className="inbox-list">
        <InboxItem />
      </div>
    </>
  );
}

export default InboxPopup;
