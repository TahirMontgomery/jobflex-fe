import {
  Container,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import React, { useState, createRef, useRef, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { makeStyles } from "@material-ui/core/styles";
import "./inbox.scss";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CloseIcon from "@material-ui/icons/Close";
import ReplyIcon from "@material-ui/icons/Reply";
import DeleteIcon from "@material-ui/icons/Delete";
import DraftsIcon from "@material-ui/icons/Drafts";
import logo from "../../assets/logo512.png";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    minWidth: "500px",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#6095d8",
      },
    },
  },
  button: {
    padding: "7px",
    color: "#f7f7f7",
    backgroundColor: "#6095d8",
    "&:hover": {
      backgroundColor: "#6095e3",
    },
    margin: "0px 4px",
  },
}));

interface InboxProps {
  setRoute: Function;
}
function Inbox({ setRoute }: InboxProps) {
  const route = useRouteMatch();
  setRoute(route.path);

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [messagePanelOpen, setMessagePanelOpen] = useState(false);

  const wrapperRef = useRef(null);
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleClickOutside(event: MouseEvent) {
    // @ts-ignore: Object is possibly 'null'.
    if (wrapperRef && !wrapperRef?.current.contains(event.target)) {
      console.log(event.target);
      setMessagePanelOpen(false);
    }
  }

  return (
    <Container disableGutters maxWidth="xl">
      <Grid container>
        <Grid className="inbox__sidebar" item md={3}>
          <div className="compose">
            <Button className="compose__btn" variant="contained">
              Compose
            </Button>
          </div>
          <p className="mail__link active">Inbox (43)</p>
          <div className="mail__links">
            <p className="mail__link">Drafts</p>
            <p className="mail__link">Important</p>
            <p className="mail__link">Spam</p>
            <p className="mail__link">Trash</p>
          </div>
          <hr className="divider__inbox" />
          <div className="chat__links">
            <h3>Chats</h3>
            <p className="chat__link">All Chats</p>
            <p className="chat__link">Messages</p>
            <p className="chat__link">Comments</p>
          </div>
        </Grid>
        <Grid className="messages__panel" item md={9}>
          <div className="messages">
            <div className="messages__header">
              <FormControlLabel
                label="Select All"
                control={<Checkbox color="primary" />}
              />
              <IconButton className="mr-3" size="small">
                <RefreshIcon fontSize="small" className="refresh" />
              </IconButton>
              <IconButton size="small">
                <SettingsIcon fontSize="small" className="settings" />
              </IconButton>
              <TextField
                className={classes.root}
                label="Search"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton className="left-arrow" size="medium">
                <ArrowLeftIcon />
              </IconButton>
              <IconButton className="right-arrow" size="medium">
                <ArrowRightIcon />
              </IconButton>
            </div>
            <div className="messages__list">
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p onClick={() => setMessagePanelOpen(!messagePanelOpen)}>
                  Tahir Montgomery
                </p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
              <div className="message">
                <div>
                  <Checkbox />
                  <IconButton
                    size="small"
                    onClick={() => setChecked(!checked)}
                    className={checked ? "checked" : ""}
                  >
                    {checked ? (
                      <StarIcon className="checked" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                </div>
                <p>Tahir Montgomery</p>
                <p>Important Please Open message</p>
                <p>
                  Lorem inpsum isp lor em ipsum in Lorem inpsum isp lor em ipsum
                  in
                </p>
                <p>12:01 PM</p>
              </div>
            </div>
          </div>
          <div
            className={
              messagePanelOpen ? "message-panel open" : "message-panel"
            }
            ref={wrapperRef}
          >
            <div className="message-panel-toolbar">
              <IconButton
                className="cursor-hover"
                onClick={() => setMessagePanelOpen(false)}
              >
                <CloseIcon />
              </IconButton>
              <h3>Important! Please read me.</h3>
              <IconButton size="small" className={classes.button}>
                <ReplyIcon />
              </IconButton>
              <IconButton
                style={{
                  transform: "scaleX(-1)",
                }}
                className={classes.button}
              >
                <ReplyIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <DeleteIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <DraftsIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <StarIcon />
              </IconButton>
              <p className="ml-3">1 of 300</p>
              <IconButton className="left-arrow" size="medium">
                <ArrowLeftIcon />
              </IconButton>
              <IconButton className="right-arrow" size="medium">
                <ArrowRightIcon />
              </IconButton>
            </div>
            <hr className="ruler" />
            <div className="email-thread">
              <div className="from">
                <img src={logo} alt="Logo" />
                <div>
                  <h3>John Doe &lt;johndoe@gmail.com&gt;</h3>
                  <h3>to Me</h3>
                </div>
                <p>May 19, 2021, 12:00 PM</p>
              </div>
              <div className="email-message">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="attachments">
                <h3>Attachment #1</h3>
              </div>
              <hr className="light-ruler" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Inbox;
