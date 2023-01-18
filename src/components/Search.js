import React from 'react';

const Search = () => {
  return (
    <div style={{ position: "relative" }}>
      <SearchBar>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          style={{ padding: dense ? "5px 10px" : 0 }}
          onChange={update}
          fullWidth
          placeholder="Search images here..."
        />
      </SearchBar>
      <SuggestionList ref={searchBoxRef}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={searchQuery} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </SuggestionList>
    </div>
  );
}

export default Search