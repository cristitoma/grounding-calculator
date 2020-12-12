<template>
    <div v-if="report !== null">
        <div class="pdf-page html__page-break">
            <h1>CALCULUL INSTALAŢIEI DE LEGARE LA PĂMÂNT DE PROTECŢIE</h1>
            <label>Proiect Nr.:</label> {{report.project.number}} <br>
            <label>Denumire proiect:</label> {{report.project.name}} <br>
            <label>Beneficiar:</label> {{report.project.beneficiary.name}} <br>
            <label>Adresa:</label> {{report.project.beneficiary.address}} <br>
            <label>Telefon:</label> {{report.project.beneficiary.phone}} <br>
            <label>E-mail:</label> {{report.project.beneficiary.email}} <br>
            <label>Proiectant:</label> {{report.project.drafter.name}} <br>
            <label>Adresa:</label> {{report.project.drafter.address}} <br>
            <label>Telefon:</label> {{report.project.drafter.phone}} <br>
            <label>E-mail:</label> {{report.project.drafter.email}} <br>
            <label>Intocmit:</label> {{report.project.createdAt}} <br>
        </div>
        <div class="pdf-page html__page-break">
            <h1>CALCULUL REZISTENŢEI DE DISPERSIE A PRIZEI DE PĂMÂNT</h1>
            <p>Rezistenţa de dispersie a unui electrod vertical îngropat la adâncimea q se calculează cu relaţia:</p>
            <div class="formula">
                r<sub>v</sub> = 0,366&nbsp; 
                <span class="frac"><sup>ρ</sup><sub>l</sub></span> 
                (lg <span class="frac"><sup>2.l</sup><sub>d</sub></span> + <span class="frac"><sup>1</sup><sub>2</sub></span>
                lg <span class="frac"><sup>4.h + l</sup><sub>4.h - l</sub></span>)
                <span class="unit">[Ω]</span>
            </div>
            <ul class="legend">
                <li>ρ = rezistivitatea solului [Ω.cm].</li>			
                <li>l  = lungimea unui electrod [cm].</li> 		
                <li>d = diametrul electrodului [cm].</li>			
                <li>
                    <div class="formula">
                        h = q + <span class="frac"><sup>l</sup><sub>2</sub></span>
                        <span class="unit">[cm]</span>
                    </div>
                </li>
                <li>
                    q = distanţa de la partea superioară a electrodului la suprafaţa solului [cm].
                </li>
            </ul>
            <p>Material electrod vertical: ţeavă Ol Zn.</p>
            <p>Diametru electrod vertical, d: {{report.calculator.verticalElectrodeDiameter}} cm</p>
            <p>Lungime electrod vertical, l: {{report.calculator.verticalElectrodeLength}} cm</p>
            <p>Natura solului: {{report.calculator.soilType}}</p>
            <p>Rezistivitatea solului, ρ: {{report.calculator.soilResistivity}} Ω.cm</p>
            <p>Rezistenţa de dispersie a electrodului vertical, r<sub>v</sub>: {{report.calculator.getResult().verticalElectrodeDispersionResistance}} Ω</p>
            <p></p>
            <p>Rezistenţa prizei verticale multiple se calculează cu relaţia:</p>
            <div class="formula">
                R<sub>v</sub> = <span class="frac"><sup>r<sub>v</sub></sup><sub>n<sub>v</sub> . u<sub>v</sub></sub></span> 
                
                <span class="unit">[Ω]</span>
            </div>
            <ul class="legend">
                <li>n<sub>v</sub> = numărul de electrozi verticali</li>			
                <li>u<sub>v</sub> = factorul de utilizare al prizei de pământ</li> 		
            </ul>
            
            <p>Număr de electrozi verticali aleşi, n<sub>v</sub>: {{report.calculator.numberOfVerticalElectrodes}} buc</p>
            <p>Distanţa dintre electrozi: {{report.distanceBetweenVerticalElectrodes}} = {{report.calculator.getResult().distanceBetweenVerticalElectrodesCM}} cm</p>
            <p>Modul de aşezare a electrozilor: {{report.verticalElectrodesPlacement}}</p>
            <p>Factor de utilizare priză de pământ, u<sub>v</sub>: {{report.calculator.getResult().verticalGroundingUF}}</p>
            <p>Rezistenţa prizei verticale multiple, R<sub>v</sub>: {{report.calculator.getResult().verticalGroundingResistance}} Ω</p>
            
        </div>
        <div class="pdf-page html__page-break">
            <p>Rezistenţa unui electrod orizontal pozat la adâncimea q, se calculează cu relaţia:</p>
            
            <div class="formula">
                r<sub>o</sub> = 0.366 <span class="frac"><sup>ρ</sup><sub> l<sub>p</sub> </sub></span> .
                lg <span class="frac"><sup>2. l<sub>p</sub><sup>2</sup></sup> <sub> b.q </sub></span> 
                
                <span class="unit">[Ω]</span>
            </div>
            <ul class="legend">
                <li>ρ = rezistivitatea solului [Ω.cm]</li>			
                <li>l<sub>p</sub> = lungimea platbandei [cm]</li> 		
                <li>b = lăţimea platbandei [cm]</li> 		
            </ul>
            <p>ρ = {{report.calculator.soilResistivity}} Ω.cm</p>
            <p>l<sub>p</sub> = {{report.calculator.strapLength}} Ω.cm</p>
            <p>b = {{report.calculator.strapWidth}} Ω.cm</p>
            <p>Rezistenţa electrodului orizontal r<sub>o</sub>: {{report.calculator.getResult().horizontalElectrodeDispersionResistance}} Ω</p>

            <p></p>

            <p>Rezistenţa prizei orizontale multiple se calculează cu relaţia:</p>
            <div class="formula">
                R<sub>o</sub> = <span class="frac"><sup>r<sub>o</sub></sup><sub>n<sub>o</sub> . u<sub>o</sub></sub></span> 

                <span class="unit">[Ω]</span>
            </div>
            <ul class="legend">
                <li>n<sub>o</sub> = numărul prizelor orizontale</li>			
                <li>u<sub>o</sub> = coeficientul de utilizare</li> 		
            </ul>
            <p>n<sub>o</sub> = {{report.calculator.numberOfHorizontalGrounding}}</p>
            <p>u<sub>o</sub> = {{report.calculator.getResult().horizontalGroundingUF}}</p>

            <p></p>

            <p>Rezistenţa prizei orizontale multiple, R<sub>o</sub>: {{report.calculator.getResult().horizontalGroundingResistance}} Ω</p>

            <p></p>

            <p>Rezistenţa prizei de pământ complexă se calculează cu relaţia:</p>
            <div class="formula">
                R<sub>p</sub> = <span class="frac"><sup>R<sub>v</sub> . R<sub>o</sub></sup><sub>R<sub>v</sub> + R<sub>o</sub></sub></span> 

                <span class="unit">[Ω]</span>
            </div>
            <p></p>
            <p>R<sub>p</sub>  = {{report.calculator.getResult().multipleGroundingResistance}} Ω</p>

            <p style="text-align:right;margin-top:60px;">Întocmit,</p>
        </div>
    
    </div>
</template>

<script>
    import GroundingCalculator from "~/Infrastructure/GroundingCalculator";
    import VueHtml2pdf from 'vue-html2pdf'
    
    export default {
        name: "Report",
        props: [
            'reportId',
        ],
        data: () => {
           return {
               report: null,
           }
        },
        mounted() {
            let report = GroundingCalculator.getReportController().getById(this.reportId);
            if (typeof report === 'undefined') {
                this.$router.push({name: 'CreateProjectForm'});
            }

            this.report = report;
        },
        components: {
            VueHtml2pdf
        }
    }
</script>

<style>
    .pdf-page {
        padding: 30px 40px;
        width: 800px;
        text-align: left;
        height: 1120px;
        font-size: 14px;
    }
    .pdf-page h1 {
        font-size: 20px;
        margin-bottom: 25px;
    }
    .pdf-page div.formula {
        display: inline-block;
        vertical-align: middle;
        padding: 0;
    }
    .pdf-page div.formula > .unit {
        margin-left: 20px;
    }
    .pdf-page span.frac {
        padding:0;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
    }
    .pdf-page span.frac > sup, span.frac > sub {
        display: block;
        padding: 0 0.3em;
        font: inherit;
    }
    .pdf-page span.frac > sup {border-bottom: 0.08em solid; top:0;}
    .pdf-page span.frac > sub {top:0;}
    
    .pdf-page .legend {
        list-style-type:none;
        text-align:left;
    }
</style>
