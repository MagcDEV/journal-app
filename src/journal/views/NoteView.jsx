import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          21 de Febrero de 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          variant="filled"
          type="text"
          fullWidth
          placeholder="Ingrese un Titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio el dia de hoy?"
          minRows={5}
        />
      </Grid>

      <ImageGallery />
      {/* Image Gallery */}
    </Grid>
  );
};
