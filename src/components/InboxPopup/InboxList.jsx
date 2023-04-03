import SearchInput from "./SearchInput";
import InboxItem from "./InboxItem";

function InboxList({ inboxData, handleActiveChat }) {
  return (
    <>
      <SearchInput />
      <div className="inbox-list">
        {inboxData.map((inbox) => (
          <InboxItem
            key={inbox.id}
            {...inbox}
            handleActiveChat={() => handleActiveChat(inbox.id)}
          />
        ))}
      </div>
    </>
  );
}

export default InboxList;
