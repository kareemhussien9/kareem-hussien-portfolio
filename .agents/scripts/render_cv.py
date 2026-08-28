import fitz
from pathlib import Path

pdf_path = Path("attached_assets/Kareem_Hussein_CV__2_1787914984995.pdf")
output_dir = Path(".agents/outputs/cv-pages")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(pdf_path)
print(f"pages={document.page_count}")
for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    output_path = output_dir / f"page-{page_number}.png"
    pixmap.save(output_path)
    print(f"rendered={output_path} size={pixmap.width}x{pixmap.height}")
    print(page.get_text("text")[:4000])