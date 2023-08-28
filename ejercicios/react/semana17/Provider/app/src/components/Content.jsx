import { useTheme } from "../ThemeContext";

function Content() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`content ${isDarkMode ? "dark" : "light"}`}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        voluptates earum, aut vel officia amet, facilis libero itaque reiciendis
        magni eligendi vero voluptatibus hic, ducimus consequuntur odit error
        nemo. Aliquid? Minima, tempore nihil sunt libero est voluptatem deleniti
        quasi, voluptate vel, eius voluptates. Accusantium aliquam quasi quidem,
        voluptatibus qui minus voluptas autem delectus dolores distinctio! In
        obcaecati ipsa eveniet porro. Porro mollitia voluptas laudantium
        voluptatum ratione explicabo ullam aut minima, nemo earum unde
        doloremque provident, tenetur non amet totam architecto incidunt
        blanditiis repudiandae neque sequi facere consectetur? Voluptatibus, nam
        modi. Alias pariatur nisi ad porro aut incidunt facere natus eveniet
        nihil repudiandae facilis illo veniam non officia expedita, odio tenetur
        dolores illum? Velit commodi ratione doloribus culpa tenetur!
        Temporibus, incidunt? Laudantium dignissimos eos tempore in, quod
        impedit doloribus quam at maxime? Rem, neque impedit aliquam quisquam ab
        maxime fugit aliquid in sapiente cumque veritatis excepturi voluptates,
        doloremque, minima quasi vero.
      </p>
    </div>
  );
}

export default Content;
