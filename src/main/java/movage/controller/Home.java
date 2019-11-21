package movage.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = "*")
public class Home {

    @GetMapping
    public String list() {
        return "index";
    }

    @PostMapping("createGif")
    public String kk() {
        return "";
    }


}
