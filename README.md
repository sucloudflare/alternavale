
  <h1>AlternaVale</h1>
    <p class="tag">Mais que um rolê, uma comunidade — Vale do São Francisco.</p>
    <div class="badges">
      <span class="badge">Next.js 16</span>
      <span class="badge">React 19</span>
      <span class="badge">TypeScript</span>
      <span class="badge">Tailwind CSS 4</span>
      <span class="badge">shadcn/ui</span>
      <span class="badge">Prisma + SQLite</span>
    </div>
  </header>

  <h2>Sobre</h2>
  <p>Página de links (estilo Linktree) da <strong>AlternaVale</strong>, um rolê underground de gente esquisita do Vale do São Francisco. O visual é gótico: fundo preto com rachaduras vermelhas, moldura neon, título metálico em Pirata One e destaques em <code>#ff2d55</code>.</p>
  <p>A página é estática, renderizada na rota <code>/</code>, e não precisa de backend para funcionar.</p>

  <h2>Recursos</h2>
  <div class="grid">
    <div class="card"><b>Hero</b><br>Logo de lua carmesim com asas, título gótico e subtítulo ornamentado.</div>
    <div class="card"><b>Redes sociais</b><br>TikTok, Instagram e X, com a tag <code>#@AlternaVale</code>.</div>
    <div class="card"><b>Grade de links</b><br>Botões neon com seta animada e brilho no hover.</div>
    <div class="card"><b>Responsivo</b><br>Testado em desktop (1280×900) e mobile (390×844).</div>
  </div>

  <h2>Links da página</h2>
  <div class="wrap">
    <table>
      <thead><tr><th>Botão</th><th>Destino</th></tr></thead>
      <tbody>
        <tr><td>AJUDE O ROLÊ!</td><td>Link de apoio (placeholder <code>#</code>)</td></tr>
        <tr><td>INSTAGRAM</td><td>instagram.com/alternavale</td></tr>
        <tr><td>TWITTER/X</td><td>x.com/AlternaVale</td></tr>
        <tr><td>TIKTOK</td><td>tiktok.com/@alternavale</td></tr>
        <tr><td>ALTERNAVALE #1 – DRIVE</td><td>Pasta no Google Drive</td></tr>
        <tr><td>ALTERNAVALE #2 – DRIVE</td><td>Pasta no Google Drive</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Tecnologias</h2>
  <ul>
    <li><strong>Framework:</strong> Next.js 16 (App Router) com React 19 e TypeScript</li>
    <li><strong>Estilo:</strong> Tailwind CSS 4, componentes shadcn/ui (Radix UI) e utilitários próprios (<code>title-metal</code>, <code>neon-glow</code>)</li>
    <li><strong>Fontes:</strong> Pirata One, Playfair Display, Permanent Marker e Inter (via <code>@fontsource</code>)</li>
    <li><strong>Ícones:</strong> lucide-react e react-icons</li>
    <li><strong>Banco:</strong> Prisma 6 com SQLite (modelos <code>User</code> e <code>Post</code>, ainda não usados pela página)</li>
    <li><strong>Runtime:</strong> Bun, com build standalone e Caddy como proxy reverso</li>
  </ul>

  <h2>Como rodar</h2>
  <p>Requisitos: <a href="https://bun.sh">Bun</a> (ou Node.js 20+).</p>
<pre><code>git clone https://github.com/sucloudflare/alternavale.git
cd alternavale
bun install

# opcional: só necessário se for usar o banco
echo 'DATABASE_URL="file:./db/custom.db"' &gt; .env
bun run db:push

bun run dev</code></pre>
  <p>Abra <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>Scripts</h2>
  <div class="wrap">
    <table>
      <thead><tr><th>Comando</th><th>O que faz</th></tr></thead>
      <tbody>
        <tr><td><code>bun run dev</code></td><td>Servidor de desenvolvimento na porta 3000</td></tr>
        <tr><td><code>bun run build</code></td><td>Build de produção (standalone)</td></tr>
        <tr><td><code>bun run start</code></td><td>Inicia o build de produção</td></tr>
        <tr><td><code>bun run lint</code></td><td>Roda o ESLint</td></tr>
        <tr><td><code>bun run db:push</code></td><td>Sincroniza o schema Prisma com o SQLite</td></tr>
        <tr><td><code>bun run db:generate</code></td><td>Gera o Prisma Client</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Estrutura</h2>
<pre><code>alternavale/
├── prisma/schema.prisma        # modelos User e Post (SQLite)
├── public/images/              # logos e texturas
├── src/
│   ├── app/
│   │   ├── layout.tsx          # fontes, metadata PT-BR, favicon
│   │   ├── page.tsx            # página principal
│   │   ├── globals.css         # tema neon/gótico
│   │   └── api/route.ts
│   ├── components/
│   │   ├── alternavale/        # ícones customizados (sparkles)
│   │   └── ui/                 # componentes shadcn/ui
│   ├── hooks/
│   └── lib/                    # db.ts, utils.ts
├── Caddyfile                   # proxy reverso (porta 81)
└── worklog.md                  # histórico de desenvolvimento</code></pre>

  <h2>Personalização</h2>
  <ul>
    <li><strong>Links e redes:</strong> edite <code>LINKS</code> e <code>SOCIALS</code> em <code>src/app/page.tsx</code>.</li>
    <li><strong>Cores e efeitos:</strong> ajuste as variáveis e utilitários em <code>src/app/globals.css</code>.</li>
    <li><strong>Título e SEO:</strong> altere <code>metadata</code> em <code>src/app/layout.tsx</code>.</li>
  </ul>

  <h2>Notas</h2>
  <ul>
    <li>O arquivo <code>db/*.db</code>, a pasta <code>upload/</code> e os arquivos <code>.env*</code> estão no <code>.gitignore</code> e não são versionados.</li>
    <li>O link do botão “AJUDE O ROLÊ!” ainda é um placeholder.</li>
  </ul>

  <footer>AlternaVale — Vale do São Francisco ✦ <a href="https://github.com/sucloudflare/alternavale">github.com/sucloudflare/alternavale</a></footer>
</main>
</body>
</html>
