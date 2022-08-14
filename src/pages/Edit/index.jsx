import { useEffect, useMemo, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Form from "../../components/Form";
import useContact from "../../hooks/useContact";

export default function EditUser() {
  const { addContact } = useOutletContext();
  const { id } = useParams();
  const contact = useContact(id);

  return (
    contact && (
      <Form
        addContact={addContact}
        contact={contact}
        title={`Edit ${contact.name}'s contact`}
      />
    )
  );
}
