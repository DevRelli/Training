from fpdf import FPDF
class Bill:
    """
    Object that contains data about a bill, such as total amount and period of the bill
    """
    def __init__(self, amount, period):
        self.amount = amount
        self.period = period
        
class Flatmate:
    """
    Create a flatmate person to pay their share of the bill
    """
    def __init__(self, name, days_in_house):
        self.name = name
        self.days_in_house = days_in_house
        
    def pays(self, bill, flatmate2):
        weight = self.days_in_house / (self.days_in_house + flatmate2.days_in_house)
        to_pay = weight * bill.amount
        return to_pay

class PdfReport:
    """
    Creates a Pdf file that contains all the data about the flatmates and their respective bills to pay
    """
    def __init__(self, filename):
        self.filename = filename
        
    def generate(self, flatmate1, flatmate2, bill):
        
        pdf = FPDF(orientation='P', unit='pt', format='A4')
        pdf.add_page()
        
        # Insert title
        pdf.set_font(family='Times', size=24, style='B')
        pdf.cell(w=0, h=80, txt='Flatmates Bill', border=1, align='C', ln=1)
        
        # Insert Period label and value
        pdf.cell(w=100, h=40, txt='Period:', border=1)
        pdf.cell(w=150, h=40, txt=bill.period, border=1, ln=1)
        # Insert Name and Amount for each flatmate
        pdf.cell(w=150, h=40, txt=flatmate1.name, border=1, ln=1)
        pdf.cell(w=150, h=40, txt=str(flatmate1.pays(bill, flatmate2)), border=1, ln=1)
        
        pdf.cell(w=150, h=40, txt=flatmate2.name, border=1, ln=1)
        pdf.cell(w=150, h=40, txt=str(flatmate2.pays(bill, flatmate1)), border=1, ln=1)
        
        pdf.output(f'{self.filename}')
    
the_bill = Bill(amount= 120, period="May 2024")
enzo = Flatmate(name="Enzo", days_in_house=20)
isabella = Flatmate(name="Bella", days_in_house=25)

print("Enzo pays: ", enzo.pays(bill=the_bill, flatmate2=isabella))
print("Bella pays: ", isabella.pays(bill=the_bill, flatmate2=enzo))

pdf_report = PdfReport(filename='Report1.pdf')
pdf_report.generate(flatmate1=enzo, flatmate2=isabella, bill=the_bill)