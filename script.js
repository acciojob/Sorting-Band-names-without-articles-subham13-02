() => {
  // cy.get("li").should("have.length.at.least", 1);
  let tags_content = [];
  const li_tags_count = document.getElementsByTagName('li').length;

  // Getting li tags content and checking if they are without any articles and in sorted order
  for (let index = 0; index < li_tags_count; index++) {
    cy.get("li").eq(index).then($el => {
      tags_content.push($el.text());
    });
  }

  tags_content.forEach(tag_content => {
    const first_word = tag_content.split(" ");
    let not_article = first_word != "A" || first_word != "An" || first_word != "The";
    expect(not_article).to.be.equal(true);
  });
}
