package movage.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import movage.data.GifRepo;
import movage.data.ImageRepo;
import movage.domain.Image;
import org.apache.tika.mime.MimeType;
import org.apache.tika.mime.MimeTypes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

@RestController("/creategif")
@CrossOrigin(origins = "*")
public class FilesController {

    @Autowired
    private ImageRepo imageRepo;
    @Autowired
    private GifRepo gifRepo;
    List<Image> nameFiles = new ArrayList<>();

    public FilesController(ImageRepo imageRepo) {
        this.imageRepo = imageRepo;
    }

    @PutMapping
    ResponseEntity addImage(@RequestPart("name") String name, @RequestParam("data") MultipartFile file) {
        System.out.println("upload start -->");

        if (!file.isEmpty()) {
            try {
                //считывание данных файла
                byte[] bytes = file.getBytes();
                String ct = file.getContentType();

                //get file's types
                MimeTypes allTypes = MimeTypes.getDefaultMimeTypes();
                MimeType mime = allTypes.forName(ct);
                String ext = mime.getExtension(); // .jpg|.png|.gif and etc..
                System.out.println(ext);
                //настроить нормальыный путь (сделать так чтобы легко было изменять )!!!!
                BufferedOutputStream stream =
                        new BufferedOutputStream(new FileOutputStream(new File( "/Users/macbook/Desktop/Java/MovageCloud/src/main/resources/images/" + name + "-uploadedlol" + ext)));
                stream.write(bytes);
                stream.close();
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        } else {
            System.out.println("Случилось невиданое дерьмо");
        }

        return ResponseEntity.ok().build();
    }

    private long getLastId() {
        return gifRepo.findTopByOrderByIdDesc();
    }

    @GetMapping
    void download() {

    }

    @DeleteMapping
    public void remove() {

    }
}
