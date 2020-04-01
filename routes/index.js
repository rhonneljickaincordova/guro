import notebook from "../controllers/notebookController";
import userDetail from "../controllers/userDetailsController";

export default app => {
  app
    .route("/users")
    .get(userDetail.getAllUserDetails)
    .post(userDetail.createUserDetail);

  app
    .route("/users/:userId")
    .get(userDetail.getUserDetails)
    .put(userDetail.updateUserDetail)
    .delete(userDetail.deleteUserDetail);

  app
    .route("/notes")
    .get(notebook.getAllNotes)
    .post(notebook.createNote);

  app
    .route("/notes/:noteId")
    .get(notebook.getNote)
    .put(notebook.updateNote)
    .delete(notebook.deleteNote);
};
