// Reference HTML snippets extracted from app.js
window.typesReferenceHtml = `<section class="types-reference">
<table class="type-table">
  <thead>
    <tr><th>Tipe</th><th>Alias</th><th>Ukuran (bits)</th><th>Rentang (decimal)</th><th>Keterangan</th></tr>
  </thead>
  <tbody>
    <tr><td data-label="Tipe">int8</td><td data-label="Alias">-</td><td data-label="Ukuran">8</td><td data-label="Rentang">-128 .. 127</td><td data-label="Keterangan">Signed integer</td></tr>
    <tr><td data-label="Tipe">uint8</td><td data-label="Alias">byte</td><td data-label="Ukuran">8</td><td data-label="Rentang">0 .. 255</td><td data-label="Keterangan">Unsigned integer (byte)</td></tr>
    <tr><td data-label="Tipe">int16</td><td data-label="Alias">-</td><td data-label="Ukuran">16</td><td data-label="Rentang">-32,768 .. 32,767</td><td data-label="Keterangan">Signed integer</td></tr>
    <tr><td data-label="Tipe">uint16</td><td data-label="Alias">-</td><td data-label="Ukuran">16</td><td data-label="Rentang">0 .. 65,535</td><td data-label="Keterangan">Unsigned integer</td></tr>
    <tr><td data-label="Tipe">int32</td><td data-label="Alias">rune</td><td data-label="Ukuran">32</td><td data-label="Rentang">-2,147,483,648 .. 2,147,483,647</td><td data-label="Keterangan">Signed integer (rune untuk code point Unicode)</td></tr>
    <tr><td data-label="Tipe">uint32</td><td data-label="Alias">-</td><td data-label="Ukuran">32</td><td data-label="Rentang">0 .. 4,294,967,295</td><td data-label="Keterangan">Unsigned integer</td></tr>
    <tr><td data-label="Tipe">int64</td><td data-label="Alias">-</td><td data-label="Ukuran">64</td><td data-label="Rentang">-9,223,372,036,854,775,808 .. 9,223,372,036,854,775,807</td><td data-label="Keterangan">Signed integer</td></tr>
    <tr><td data-label="Tipe">uint64</td><td data-label="Alias">-</td><td data-label="Ukuran">64</td><td data-label="Rentang">0 .. 18,446,744,073,709,551,615</td><td data-label="Keterangan">Unsigned integer</td></tr>
    <tr><td data-label="Tipe">int</td><td data-label="Alias">-</td><td data-label="Ukuran">platform-dependent</td><td data-label="Rentang">-(2^(N-1)) .. 2^(N-1)-1</td><td data-label="Keterangan">Ukuran bergantung pada arsitektur (32-bit/64-bit)</td></tr>

    <tr><td data-label="Tipe">float32</td><td data-label="Alias">-</td><td data-label="Ukuran">32</td><td data-label="Rentang">~±1.18e-38 .. ±3.4e38</td><td data-label="Keterangan">IEEE-754 32-bit</td></tr>
    <tr><td data-label="Tipe">float64</td><td data-label="Alias">-</td><td data-label="Ukuran">64</td><td data-label="Rentang">~±2.23e-308 .. ±1.80e308</td><td data-label="Keterangan">IEEE-754 64-bit</td></tr>

    <tr><td data-label="Tipe">complex64</td><td data-label="Alias">-</td><td data-label="Ukuran">64</td><td data-label="Rentang">—</td><td data-label="Keterangan">2 buah float32 (real + imag)</td></tr>
    <tr><td data-label="Tipe">complex128</td><td data-label="Alias">-</td><td data-label="Ukuran">128</td><td data-label="Rentang">—</td><td data-label="Keterangan">2 buah float64 (real + imag)</td></tr>

    <tr><td data-label="Tipe">bool</td><td data-label="Alias">-</td><td data-label="Ukuran">1 (konseptual)</td><td data-label="Rentang">true / false</td><td data-label="Keterangan">Tipe boolean</td></tr>
    <tr><td data-label="Tipe">string</td><td data-label="Alias">-</td><td data-label="Ukuran">variable</td><td data-label="Rentang">—</td><td data-label="Keterangan">Sequence of bytes (UTF-8), immutable</td></tr>
    <tr><td data-label="Tipe">byte</td><td data-label="Alias">alias for uint8</td><td data-label="Ukuran">8</td><td data-label="Rentang">0 .. 255</td><td data-label="Keterangan">Umumnya untuk raw binary data</td></tr>
    <tr><td data-label="Tipe">rune</td><td data-label="Alias">alias for int32</td><td data-label="Ukuran">32</td><td data-label="Rentang">-2,147,483,648 .. 2,147,483,647</td><td data-label="Keterangan">Representasi code point Unicode</td></tr>
  </tbody>
</table>
<p class="note">Catatan: rentang numeric adalah teoretis; ukuran <code>int</code>/<code>uint</code> bergantung pada arsitektur (32-bit/64-bit).</p>
</section>`;

window.printfReferenceHtml = `<div class="printf-ref">
  <p>Example <code>fmt.Printf</code> using format verbs and width/precision options.</p>
  <table class="type-table">
    <thead><tr><th>Verb</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>%v</td><td>Default format for value</td><td><code>fmt.Printf("%v", x)</code></td></tr>
      <tr><td>%T</td><td>Type of the value</td><td><code>fmt.Printf("%T", x)</code></td></tr>
      <tr><td>%s</td><td>String</td><td><code>%s</code></td></tr>
      <tr><td>%d</td><td>Decimal integer</td><td><code>%d</code></td></tr>
      <tr><td>%f</td><td>Floating-point (default 6 dec places)</td><td><code>%.2f</code></td></tr>
      <tr><td>%t</td><td>Boolean</td><td><code>%t</code></td></tr>
      <tr><td>%#x</td><td>Hex with 0x prefix</td><td><code>%#x</code></td></tr>
      <tr><td>%q</td><td>Double-quoted string</td><td><code>%q</code></td></tr>
      <tr><td>%p</td><td>Pointer address</td><td><code>%p</code></td></tr>
    </tbody>
  </table>
  <p>Width/precision options: <code>%6d</code> (width), <code>%-10s</code> (left align), <code>%06d</code> (zero pad), <code>%8.3f</code> (width + precision).</p>
</div>`;
