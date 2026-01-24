import { images } from "./2025/images";
import Images2024 from "./2024/Images2024";
import Images2023 from "./2023/Images2023";

let Images = [
    {
        year: 2026,
        subtitle: "Medical Edition",
        items: Object.values(images)
    },
    {
        year: 2024,
        subtitle: "tomorrow's reality, today's vision. smart cities edition.",
        items: Images2024
    },
    {
        year: 2023,
        subtitle: "about://building-trust-in-digital-state",
        items: Images2023
    }
]

export default Images
