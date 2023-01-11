import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSearchQueryUpdate } from "../context/SearchQueryContext";

const TagList = ({ tags, onAfterTagClick }) => {
  const updateSearchQuery = useSearchQueryUpdate();

  const updateSearchQueryWithTag = (tag) => {
    updateSearchQuery(tag);
    onAfterTagClick();
  };

  return (
    <Box sx={tagListContainer}>
      {tags.map((tag) => (
        <Button
          key={tag.title}
          size="small"
          disableElevation
          onClick={() => updateSearchQueryWithTag(tag.title)}
        >
          {tag.title}
        </Button>
      ))}
    </Box>
  );
};

// Styles
const tagListContainer = {
  pt: 1,
  display: "grid",
  gridAutoFlow: "dense",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: 2,
};

export default TagList;
